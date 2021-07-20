//
//  EditViewController.swift
//  exmp2_cd
//
//  Created by Mark Hunte on 13/07/2021.
//

import UIKit

class EditViewController: UIViewController,UITextViewDelegate {
    /// var will be set by the e WK view  controller when  it performs a segue to this view
    /// for collecting the text to edit from the WK view
    var editText:String = ""
    var editName:String = ""
  
   
    
    @IBOutlet var editTextBox: UITextView!
   
    @IBOutlet var editImage: UIImageView!
    
    @IBOutlet var editNameLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        editTextBox.delegate = self
        editTextBox.layer.borderColor = UIColor.lightGray.cgColor
        editTextBox.layer.borderWidth = 1
        editTextBox.text = editText
        
        
        editNameLabel.text = editName
        let imageName = editName.components(separatedBy: "_")[0]
        
        /// actual image are in the xcasset
        editImage.image = UIImage(named: imageName)
        editImage.layer.cornerRadius = 12.0
        editTextBox.translatesAutoresizingMaskIntoConstraints = false
        editTextBox.textContainerInset = UIEdgeInsets(top: 10, left: 10, bottom: 50, right: 10)
        editTextBox.sizeToFit()
       
        editTextBox.becomeFirstResponder()
       
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?)
    {
        /// we use this to push the edit back to the WK viewconroller
        if segue.destination is WKWebViewController {
            let vc = segue.destination as? WKWebViewController
            vc?.returnEditText = editTextBox.text
            
        }
    }
    
    
    /// hack to stop return key making newlines. New lines in this example do not allow the text to be save.
    /// probably can fix but no point here since we really just want a string.
    func textView(_ textView: UITextView, shouldChangeTextIn range: NSRange, replacementText text: String) -> Bool {
        /// used to allow dismissing keyboard on return button.
        
        if text == "\n" {
            textView.resignFirstResponder()
            return false
        }
        return true
    }
    
 
   
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
