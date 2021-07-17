# Hype-CoreData-Example


**Hype communication  with Xcode App - saving and retrieving with CoreData Example**

---



*If you find this or any of my projects or help helpful and want to say thanks as well as support me please go to:*

*https://github.com/sponsors/markhunte*

*or :*

*You can make a one off donation using gumroad downloads*

*https://gumroad.com/markhunte*

*Many thanks*

------

**The Example**

This is an example of how to pass data to you App and store it locally in in the App using CoreData.

This does not teach you how to use CoreData nor a tutoial.

Please refer to these 4 videos which will explain better how CoreData works. The CoreData setup  in this example matches that how to. 



This example uses the same WKWebView communications I show in my  GitHub  projects.

https://github.com/markhunte/Xcode-Build-Templates-for-Hype-html



Indeed that was the starting place using the **PostMessage** Template.

And I will not go into using that here since it is alread explained in the above link and also many times else where.



-----

Background to the Example.

https://forums.tumult.com/t/communicate-to-and-from-hype-and-a-native-ios-app/20903



-----



**Sending the initial data to the App from the Hype Project.**



From the Hype Project

Each Box, the ones that hold the text we want to edit share a class name  **boxtext**

On Scene Load, a javascript action will gather each element  in a non-live Nodlist.

It will then within a forloop, extract a box's **innerText**  and **id**, build them into a **JSON** object string

and post that data to the App.



(This will always happen when the App loads the project )



**Reciving the initial data in the App from the Hype Project.**



When the App loads , it will first check if there is any existing CoreData.

**If there is No coreData,  **

The app will save the new data in the App's coreData.

Remember, the videos should have explained how coreData works and fetchRequest, predicates etc.

The difference here is we are not using TableViews so we interact with the CoreData Persistent Context a little differently. We dod this much the same way we would with an Array and access the items within if the exist.

There should only be one item at any time being saved or fetched, so this simplifies things a bit.

The project is commented so you should be able to understand the process.

**If there is Existing coreData,  **

the app will send this data to the Hype project telling it to load the boxes innerText with it.



----

When you tap a boxes outer Group. ( to edit )

The Hype Project will run a javascript to send the selected box's detail to the App.

It will send in JSON string form the **innerText** and **ID**.

( yes we could also just send just the id and get the coreData match but this is how I did it as it is was  simple )



The App will recieve the edit message and will

 performSegue(withIdentifier: "editSegue", sender: nil)

To show the edit ViewController.



The **editSegue** was created in The main.storyBoard.

( Again not a tutorial )

----

There is a convenience Action for viewControllers called an **unwind segue** 

When a segue is used this Action will run.  Its like a delegate function but for segues.

The great thing about this is I found you can use this to transport data between viewControllers.  

So this is how I do it. Really bloody simple in the end.

For more on unwind segue see

https://developer.apple.com/documentation/uikit/resource_management/dismissing_a_view_controller_with_an_unwind_segue

Which explains them and how to connect them.

---

When we segue out we go through the prepare for segue delegate handler.

This will link to the edit viewController first and update it's   **editText** and **editName**  properties.

With the innerText and id name we need.

We the segue and show the edit viewController with the text ready to edit.



Hitting the save key will do a similar task using it's own unwind segue and updating the WkWebView's controller property  **returnEditText** with the newly edited text. We can just use the same name/id we already had.

The new data will be saved to the Coredata using the saveEdit() function. Which also update the Hype Project be posting a message with the new text to update the box's innerText.



Thats it in a nut shell.

The is also css code in the Hype project to allow for Dark /Light Mode in the App.











