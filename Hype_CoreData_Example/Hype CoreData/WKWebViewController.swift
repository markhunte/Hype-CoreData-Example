//
//  WKWebViewController.swift
//  exmp2_cd
//
//  Created by Mark Hunte on 10/07/2021.
//


import UIKit
import WebKit
import AVFoundation
import CoreData

 
class FullScreenWKWebView: WKWebView {
    override var safeAreaInsets: UIEdgeInsets {
        return UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 0)
    }
}


class WKWebViewController: UIViewController, WKNavigationDelegate  ,WKScriptMessageHandler ,UITextViewDelegate{
    
    @IBOutlet var editView: UITextView!
    
    ///  declare a WKWebView
    private  var webView: WKWebView!
    
    
    ///  declare a any vars
    private  var theContent :String = ""
    private  var theName : String = ""
    
    private  var contentItems:[ScriptingSetting]?
    
    let moc =   ( UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
   
    
    ///  declare a message name to use later
    let messageSetCont = "setcont"
    let messageEdit = "edit"
    
    ///  declare a your html file  name to use later ( do not include the .html )
    let htmlName = "cdata"
    
 
    
    
    /// member/var will be set by the edit view controller when it unwinds
    /// this will then be used to update coredata and the hype scene.
    var returnEditText:String = ""
    
    
    override func viewDidLoad() {
        
        super.viewDidLoad()
     
        /// configure the WKWebView
        
        ///  init config and controller
        
        let wconfiguration = WKWebViewConfiguration()
        let wcontroller = WKUserContentController()
        
        //MARK: WKUserContentController Init :  We must add the webkit scripts Posted messages we expect to get from the Hype Page to the controller
        wcontroller.add(self, name:  messageSetCont )
        
        wcontroller.add(self, name:  messageEdit )
        
        
        ///  attach controller, config to WKWebview
        wconfiguration.userContentController = wcontroller;
        
        
        wconfiguration.allowsInlineMediaPlayback = true
        wconfiguration.mediaTypesRequiringUserActionForPlayback = []
        
        webView = FullScreenWKWebView(frame: .zero, configuration: wconfiguration)
       
        
        let  theFileName = (htmlName as NSString).lastPathComponent
        let htmlPath = Bundle.main.path(forResource: theFileName, ofType: "html")
        
        let folderPath = Bundle.main.bundlePath
        
        let baseUrl = URL(fileURLWithPath: folderPath, isDirectory: true)
        
        do {
            
            let htmlString = try NSString(contentsOfFile: htmlPath!, encoding: String.Encoding.utf8.rawValue)
            
            webView.loadHTMLString(htmlString as String, baseURL: baseUrl)
            
        } catch {
            
            // catch error
            
        }
        
        webView.navigationDelegate = self
        
        webView.scrollView.bounces = false
        webView.scrollView.isScrollEnabled = true
        webView.isOpaque = false
        webView.isHidden = false
     
        view = webView
        
        fetchContent ()
    }
    
    
    /// this unwind used for cancel button.
    @IBAction func myUnwindAction(unwindSegue: UIStoryboardSegue){
        
    }
    
    
    /// we use this unwind to collect the new edit from the edit view controller when it is dismissed with
    /// this unwind
   
    @IBAction func myUnwindReturn(unwindSegue: UIStoryboardSegue){
       
        print("myUnwindReturn returnEditText = \(self.returnEditText)")
        
        theContent = self.returnEditText
        
        /// this will be used to update coredata and the hype scene.
        
        saveEdit()
    }
    @IBAction func saveChanges(_ sender: Any) {
        
    }
    
 
    
    /// This function is used to update coredata and the hype scene once we have it back from the edit view controller
    @IBAction func saveEdit() {
        
        print("HERERE")
       
        do {
            
            ///- We do a NEW RQUEST TO GET THIS ITEM IN THE COREDATA THAT IS BEING EDITED
            let request1 =  ScriptingSetting.fetchRequest() as NSFetchRequest<ScriptingSetting>
            
            /// Set filter
            
            print("pred theName = \(theName)")
            let  pred = NSPredicate(format: "name == '\(theName)'")
            request1.predicate = pred
            self.contentItems =  try moc.fetch(request1)
        }
        catch {
            print("Probelm fetching Core Data in saveEdit() \(error)")
        }
        
        
        /// We check for the correct managed object item and set the content for coreData
        
        for item in self.contentItems! {
            print("item. name = \(String(describing: item.name!))")
            print("thisName = \(String(describing: self.theName))")
            
            
            
            if(item.name! == self.theName){
                item.content =  self.theContent
                
            }
        }
        
        do {
            
            /// we then save it
            
            
            try self.moc.save()
            
            /// We then push the changes to display in the Hype boxes.
            
            print("\(self.theName)")
            self.webView!.evaluateJavaScript("HYPE.documents['\(self.htmlName)'].getElementById('\(self.theName)').innerText = '\(self.theContent )'")
            
        }
        catch {
            print("Problem saving new Coredata or updating Hype in saveEdit() \(error)")
        }
        
        
    }
    
    
    
    
 
    
   
    // MARK: - WKUserContentController:  -> webkit Posted messages handler delegate ///  handles messages from hype page
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        
        
        print("\(message.name )")
        
         var thisName = ""
      var thisContent = ""
        
        
        /// First messages from Hype is to send over a Json string with all the boxes names and content.
        /// The messages are in a forloop in Hype so come over one at a time.
        /// These message names are for messageSetCont
        
        /// We then convert it to a JSON data.
        
        if let objStr = message.body as? String {
            
            let data: Data = objStr.data(using: .utf8)!
            do {
                let jsObj = try JSONSerialization.jsonObject(with: data, options: .init(rawValue: 0))
                if let jsonObjDict = jsObj as? Dictionary<String, Any> {
                    thisName = jsonObjDict["name"] as! String
                    thisContent = jsonObjDict["content"] as! String
                    
                } else {
                    
                }
            } catch _ {
                print("having trouble converting it to a dictionary in userContentController delegate ")
            }
            
        }
        
        /// Posted messages  from Hype page
        if message.name ==  messageSetCont {
            
            print("MESSAGE NAME \(message.name )")
        /// Get the message passed to app
            
        /// we set the global vars for the current box and then try and fetch the related core data entry.
            theContent   =  thisContent
            theName = thisName
            
            fetchContent ()
        }
        
        
        
        
        
        
        ///  This is for the edit    messageEdit
        ///  We build a custom Alert with a large text area.
        /// We add a save button with an action and a Cancel button
        
        if message.name ==  messageEdit {
            
            print("MESSAGE NAME \(message.name )")
            
            theContent   =  thisContent
            theName = thisName

            /// open editing viewcontroller
            performSegue(withIdentifier: "editSegue", sender: nil)
            
        }
        
    }
    
    
    
    
    
    
    
    /// main fetch for coreData on loading.
    func fetchContent (){
        
        ///Fetch data from coreData
        
        do {
            
            let request =  ScriptingSetting.fetchRequest() as NSFetchRequest<ScriptingSetting>
            
            /// Set filter, we should only have one entry at a time.
            
            // print("pred theName = \(theName)")
            let  pred = NSPredicate(format: "name == '\(theName)'")
            request.predicate = pred
            
            self.contentItems =  try moc.fetch(request)
            
            
            if self.contentItems?.count == 0 {
                print(" NEW CORE DATA")
                ///  If core data is empty use the content from the message and save it to coreData
                
                let newContent = ScriptingSetting(context: self.moc)
                newContent.name =  theName
                newContent.content = theContent
                
                
                do {
                    
                    try self.moc.save()
                    
                }
                catch {
                    print("Problem saving core data in fetchContent() \(error) ")
                }
                
            } else {
                
                ///  if core data is NOT empty use the content from the message we push it to the Hype box.
  
                let st1 = self.contentItems?.last?.content!
                webView!.evaluateJavaScript("HYPE.documents['\(htmlName)'].getElementById('\(theName)').innerText  = '\(st1! )'")
            
            }
        }
        catch {
          
            print("Probelm updating Hype from Core Data in fetchContent() \(error) ")
        }
        
        
    }
 
    
    /// When we perfor the segue to the edit viewcontroller we will pass in our data vie it's editText member
    override func prepare(for segue: UIStoryboardSegue, sender: Any?)
    {
        if segue.destination is EditViewController {
            let vc = segue.destination as? EditViewController
            vc?.editText = theContent
            vc?.editName = theName
            
        }
    }
    
//        // MARK: Action for the App to send message to Hype
//        @objc func selectorX(_ sender: UIBarButtonItem) {
//
//            webView!.evaluateJavaScript("HYPE.documents['\(htmlName)'].showSceneNamed('\(sender.title!)', HYPE.documents['\(htmlName)'].kSceneTransitionCrossfade, 0.2);", completionHandler:nil )
//
//            sender.title = ( sender.title  == "Scene 2" ? "Scene 1" : "Scene 2")
//
//
//
//
//
//        }
    
//        // MARK: Add navigationBar and buttons programmatically
//        override func viewWillLayoutSubviews() {
//
//            let startingYPos =   view.window?.windowScene?.statusBarManager?.statusBarFrame.height ?? 0
//
//            let width = self.view.frame.width
//            let navigationBar: UINavigationBar = UINavigationBar(frame: CGRect(x: 0, y: startingYPos, width: width, height: 44))
//            self.view.addSubview(navigationBar);
//            let navigationItem = UINavigationItem(title: "Navigation bar")
//            let doneBtn = UIBarButtonItem(title: "Scene 2", style: UIBarButtonItem.Style.plain, target: nil, action: #selector(selectorX))
//
//            navigationItem.rightBarButtonItem = doneBtn
//            navigationBar.setItems([navigationItem], animated: false)
//
//
//        }
    
    
    
    
}

