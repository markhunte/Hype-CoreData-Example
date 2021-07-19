# Hype-CoreData-Example


**Hype communication  with Xcode App - saving and retrieving with CoreData Example**

---

![coreDataIcon](README.assets/coreDataIcon.png)

*If you find this or any of my projects or help helpful and want to say thanks by sponsoring  me please go to:*

*https://github.com/sponsors/markhunte*

or :

Make a one off donation by  downloading via gumroad 

 https://gumroad.com/markhunte

*Many thanks*

------

 **The Example**



This is an XCode project example of how to pass data  from your Hype project to your App and store it locally in the App using CoreData, allowing persistent data changes to be done locally and not be destroyed when the App is quit.

  ***<u>Must see Videos on CoreData</u>**

Please refer to these 4   https://youtu.be/6XASUd7h5-s  videos 

by [CodeWithChris](https://www.youtube.com/channel/UC2D6eRvCeMtcF5OGHf1-trw)

They will explain better how CoreData works. The CoreData setup  in this example matches that "how to". 

---



This example uses the same WKWebView communications I show in my GitHub  project.

https://github.com/markhunte/Xcode-Build-Templates-for-Hype-html



Indeed that was the starting place using the **PostMessage** Template.

And I will not go into using that here since it is already explained in the above link and also many times else where.



-----

Background to the Example. Discussions on The Tumult Forums.

https://forums.tumult.com/t/communicate-to-and-from-hype-and-a-native-ios-app/20903



-----



**Sending the initial data to the App from the Hype Project.**



From the Hype Project

Each Box, the ones that hold the text we want to edit share a class name  **boxtext**

On Scene Load, a javascript action will gather each element  in a non-live Nodlist.

It will then within a forloop, extract a box's **innerText**  and **id**, build them into a **JSON** object string *(stringified)*

and post that data to the App. 

i.e

`{"name" :"box1_text", "content" : foo foo text" }`



(This will always happen when the App loads the project but will run checks to see what should be used)



**Reciving the initial data in the App from the Hype Project.**



When the App loads , it will first check if there is any existing CoreData.

**If there is No coreData,  **

It will convert the Json String into a Json Object via *JSONSerialization*

Working with the id/name and content/text  the app will save the new data in the App's coreData.

Using the  name/id for the coreData Enitity '**ScriptingSetting**' ***name*** Attribute and the content/text as the ***content*** attribute.



Remember, the videos should have explained how coreData works etc.

The difference here is we are not using TableViews so we interact with the CoreData **Managed Object  Context**   (*moc*) a little differently. 

We use the context in much the same way we would with an Array and access the items within if they exist.

There should only be one item at any time being saved or fetched,  We use define and fetchRequest **predicates** to only work with the relivant data in coreData.

The project is commented so you should be able to understand the process.

---



**If there is Existing coreData,  **

the app will send this data to the Hype project telling it to load the boxes innerText with it.

This will happen on sceneload.

<img src="README.assets/Simulator Screen Shot - iPhone 11 - 2021-07-18 at 09.49.55-6598579.png" alt="Simulator Screen Shot - iPhone 11 - 2021-07-18 at 09.49.55" height="800" />

----

This example shows how changes to coreData work by allowing the user to edit the current text in a box and save it.

So each time the App loads the new text will be fetched and displayed in the Hype boxes.



**Editing the Text**



When you tap a boxes outer Group. ( to edit )

The Hype Project will run a javascript to send the selected box's details to the App.

It will send in JSON string form the **innerText** and **ID**.

( yes we could also just send  the id and get the coreData match but this is how I did it as it is was simple )



The App will recieve the edit message and will

` performSegue(withIdentifier: "editSegue", sender: nil)`

To show the **EditViewController**.



The **editSegue** was created in The main.storyBoard manually and is not created in the code.

----

When we segue out, we go through the **prepare for segue** delegate handler.

```
 override func prepare(for segue: UIStoryboardSegue, sender: Any?)

  {

		if segue.destination is EditViewController {

 		let vc = segue.destination as? EditViewController

 		vc?.editText = theContent

 		vc?.editName = theName
  	}

  }
```

This will link to the *EditViewController* first and update it's   **editText** and **editName**  properties.

With the innerText and id name we need.

We then segue and show the *EditViewController* with the text ready to edit.





<img src="README.assets/Simulator Screen Shot - iPhone 11 - 2021-07-18 at 09.50.31.png" alt="Simulator Screen Shot - iPhone 11 - 2021-07-18 at 09.50.31" height="800" />





**unwind segue** ?

There is a little known convenience Action for viewControllers called an **unwind segue** 

When a segue is unwound this Action will run.  Its like a delegate function but for segues.

The great thing about this is I found you can use this to to avoid class *self* issues and complex code just to run a function on  the pervious ViewController.

So this is how I do it. Really bloody simple in the end.

For more on unwind segue see

https://developer.apple.com/documentation/uikit/resource_management/dismissing_a_view_controller_with_an_unwind_segue

Which explains them and how to connect them.

---

**The save button is connected to the unwind segue action.**



Hitting the **save** button will  first go through it's own prepare for segue passing the new text to the *WKWebViewController* property **returnEditText**.

As we  go back into the *WKWebViewController*  we are using the unwind segue which lets us access the **returnEditText** with the newly edited text  ( We just use the same name/id we already had.) and the *WKWebViewController* saveEdit() function.  



----

*Bang and there it is. No complex coding just to call this function when we need it.* 

*Using the unwind segue means we do not need to code,link  or call rom the EditViewController any of our functions in the WKWebViewController like the SaveEdit().  ( which I find a big pain in the arse)*

----



The new data will be saved to the Coredata using the saveEdit() function. Which also updates the Hype Project by posting a message with the new text to update the box's innerText.





---

Keyboard Return key.

There is a hack ( not the best) that sets the <kbd> return </kbd> to dismiss the keyboard rather than do a newline in the text. Mainly because I have not dealt with newlines and escaping them and we really only need a single line of text.

---



Thats it in a nut shell.

When you next open the App, the new text will be used and not the text in the Hype project.



---



There is also css code in the Hype project to allow for Dark /Light Mode in the App.





<img src="README.assets/Simulator Screen Shot - iPhone 11 - 2021-07-18 at 09.53.59.png" alt="Simulator Screen Shot - iPhone 11 - 2021-07-18 at 09.53.59" height="800" />











