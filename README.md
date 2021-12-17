# doggodit-client

**Doggodit **

kinda socialmedia for dog owners and everyone elese who likes dogs. 

Add favourites breeds to your profile, create a post to feed and allow registered users to comment it. 



**Models: **

User {
username: {type:String, reqired: true, unique:true}
email: {type:String, reqired: true, unique:true}
password:{type:String, reqired: true}
profileImage: {type:String}
posts: [{type: Schema.Types.ObjectId, ref: "Post"}]
interactions: [{type: Schema.Types.ObjectId, ref: "Comment"}]*
}

Post {
tag:  {type:String, reqired: true, enum: [question, showing off, just sharing, help]}
text:  {type:String, reqired: true}
postImage: { {type:String}
dogBreed: Number
createdBy:  {type: Schema.Types.ObjectId, ref: "User"}
{
comments: [
    {
        text: string, 
        user: {type: Schema.Types.ObjectId, ref: "User"}
    }
    ]
}
timestamps {

}
}


**User Stories **

For Anon: 

`homepage` - can see the feed, can log in or register, can see the random dog and check the dog list, can't perform any other actions

`signup` - can access the signup form 

`doglist` - can see all the dogs from API


For User:

`homepage`- can see the feed, create a comment, random dog, their profile 

`doglist` - can see all the dogs from API a
nd add them to favs

`doglist/:dogId` - can see info about the dog, can add them to favs, can come back to the previous page

`user/edit`- edit profile, also can delete account there

`user/favs` - list with favs dogs, can delete from there

`user/posts` - list of created posts, can edit and delete 
`user/posts/:postId` - edit a post form

`user/interactions` - list of posts the user interacted with*


