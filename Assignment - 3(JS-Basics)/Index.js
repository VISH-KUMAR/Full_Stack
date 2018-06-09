//1. Area of triangle
function solution1() {
    var a = 5; 
    var b = 6; 
    var c = 7;
    var perimeter = (a + b + c)/2;
    var area = Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));
    return area;
     
}


//2. temp conversion
function solution2(){
    var tempInDegreeC = 60;
    var tempInFahrenheit;
    tempInFahrenheit = (tempInDegreeC/5) * 9 + 32;  

    var tempInFahre = 45;
    var tempInDegreeCelsius = ((tempInFahre - 32) / 9) * 5;
    return   "Temp In Degree Celsius " + tempInDegreeCelsius + " & temp In Fahrenheit "+tempInFahrenheit;
}

//3.  max of three
function solution3(){
    var x = 67;
    var y = 23;
    var z = 57;
    var max;
    if(x>y && x>z )
        max = x;
    if(y>x && y>z)
        max = y;
    if( z>x && z>y)
        max = z;
     return max;           
}   


//4 capatalize each word
function solution4(){
    var string = "this is vicky kumar";
    var string1 = string.split(" "); 
    var arr = [];
    for( var i =0;i<string1.length;i++ ){
       arr[i] = string1[i].charAt(0).toLocaleUpperCase() + string1[i].substr(1).toLowerCase();
   }
   arr = arr.join(" ");
   return arr;
}

//5 multiple of 3 and 7
function solution5(num){
    if(num%3 == 0 || num%7 == 0)
        return true;
    return false;    
}

//6 difference of two string
function solution6(){
    var string1 = "GAGCCTACTAACGGGAT";
    var string2 = "CATCGTAATGACGGCCT";
    count = 0;
    for( var i = 0 ; i < string1.length ; i++)
    {
        if(string1[i] !== string2[i])
        {
            count++;
        }
    }
    return count;
}

//7  pangram
function solution7(){
    var string = "The quick brown fox jumps over the lazy dog";
    var string1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] ; 

    for(var i = 0 ; i < string.length ; i++){
        var char = string.charAt(i);
        for(var j = 0 ; j<string1.length ; j++){
            if(char == string1[j])
            {
                string1.splice(j,1);
            }
        }    
    }
    if(string1 == ""){
        return 'This is pangram';
    }
    else{
        return 'This is not a pangram';
    }

}

//8  check isogram
function solution8(){
    var string = 'lumberjack';
    var bool = true;
    for(var i = 0 ; i< string.length ; i++){
        var a = string.charAt(i);
        for( var j = i+1 ; j < string.length ; j++)
        {
            if(a === string[j])
            {   
                bool = false;
            }
            if(!bool){
                break;
            }  
        }
        if(!bool){
            console.log('false');
            break;
        }  
            return true;
        }   
}    
//9 Acronym 
function solution9(string){
    var q = string.split(" ");
    var arr = [];
    for( var i =0 ; i<q.length;i++){ 
        arr[i] = q[i].charAt(0).toUpperCase(); 
    }
    arr = arr.join("");
    return arr;
}


var  facebookNewsFeed =   {
    "news":{
        "post":[
            {
                "authorName":"Author1",
                "authorImg":"Img1",
                "likedBy":["user1","user2","user6","user3"],
                "commentBy":["user5","user1","user2","user4","user7","user1"],
                "share":["as","sdf","vc","fgh","jh","jj"]
            },
            {
               "authorName":"Author2",
               "authorImg":"Img2",
               "likedBy":["user4","user5","user2","user3"],
               "commentBy":["user5","user4","user2","user9","user7"],
               "share":["as","sdf","vc","fgh","jh","jj"]
            },
            {
               "authorName":"Author2",
               "authorImg":"Img2",
               "likedBy":["user4","user5","user2","user3"],
               "commentBy":["user5","user4","user2","user9","user7"],
               "share":["as","sdf","vc","fgh","jh","jj"]
            },
            {
               "authorName":"Author3",
               "authorImg":"Img3",
               "likedBy":["user4","user5","user2","user3"],
               "commentBy":["user5","user4","user2","user9","user7"],
               "share":["as","sdf","vc","fgh","jh","jj"]
            },
            {
               "authorName":"Author5",
               "authorImg":"Img5",
               "likedBy":["user5","user2","user3","user6","user8"],
               "commentBy":["user5","user4","user2","user1","user8","user2"],
               "share":["as","sdf","vc","jh","jj"]
            }

        ]
    }    
};
//how many posts are there by a particular user 
function solution10a(){
    var postByAuthors = [];
    var a = 0 ,a1 = 0,a2 = 0,a3 = 0,a4 = 0;
    for(var i = 0; i < facebookNewsFeed.news.post.length; i++ ){
        if(facebookNewsFeed.news.post[i].authorName === "Author1"){
            postByAuthors[0] = ++a;
        }
        if(facebookNewsFeed.news.post[i].authorName === "Author2"){
            postByAuthors[1] = ++a1;
        }
        if(facebookNewsFeed.news.post[i].authorName === "Author3"){
            postByAuthors[2] = ++a2;
        }
        if(facebookNewsFeed.news.post[i].authorName === "Author4"){
            postByAuthors[3] = ++a3;
        }
        if(facebookNewsFeed.news.post[i].authorName === "Author5"){
            postByAuthors[4] = ++a4;
        }
    
    }
    return postByAuthors;
    //return "Author1:"+a+"Author2:"+a1+"Author3:"+a2+"Author4:"+a3+"Author5:"+a4;
}
//Likes on 5th post
function solution10b(){   return facebookNewsFeed.news.post[4].likedBy.length;  }

//Users who liked the 5th post
function solution10c(){   return facebookNewsFeed.news.post[4].likedBy; }

//first user who liked 5th post
function solution10d(){   return facebookNewsFeed.news.post[4].likedBy[0];}

//users who both commented and likes on 5th post
function solution10e(){ 
    var obj =  facebookNewsFeed.news.post[4];
    var users = [];
    var k = 0;
    for(var i = 0 ; i < obj.likedBy.length; i++)
    {
        for(var j = 0 ; j < obj.commentBy.length;j++ )
        {
            if(obj.likedBy[i] === obj.commentBy[j]){
                users[k++] = obj.likedBy[i];
            }
        }
    }
    return "Total user are:"+users.length+"  "+users;
}

//Person who commented most 
function solution10f(){
    var obj =  facebookNewsFeed.news;
    var wholeCommented = [];
    var countArr = [];
    var users = ["user1","user2","user3","user4","user5","user6","user7","user8","user9"];
    for(var i =0 ;i<obj.post.length;i++){
        wholeCommented= wholeCommented.concat(obj.post[i].commentBy);
        
    }
    for(var i = 0; i < users.length -1 ; i++){
       var  count1 = 0;
        for(var j = 0 ; j< wholeCommented.length ; j++){
            if(wholeCommented[j] === users[i] ){
                count1++;
            }
        }
        countArr[i] = count1;
    }
    var max =  countArr[0], mostCommentUser = [];
    for(var i = 1;i < countArr.length ; i++){
        if(countArr[i]>=max){
            max = countArr[i];
            mostCommentUser.push(users[i]);
        }
    }
    //or    for finding the max of array               Math.max.apply(null, array);
    return max+" Times commented by "+mostCommentUser;
}  


//11
    var friendList = {
        name:[
            "Vicky kumar",
            "Piyush yadav",
            "Fake Singh",
            "Sachin upadhayay",
            "Rishabh jain",
            "Rishabh redh",
            "Yogesh sain",
            "fake fake",
            "Vicky  kumar"
        ]
    };

//delete friends who fake first name
function solution11a(){
    for(var i=0;i<friendList.name.length;i++){
        var first = friendList.name[i].split(" ");
        if(first[0] === "Fake" || first[0] === "fake"){
            var index = friendList.name.indexOf(friendList.name[i]);
            if(index >-1){
                friendList.name.splice(index,1);
            }
        }
}
return friendList.name;
}

//adding 
function solution11b(){
    friendList.name.push("CJ", "BG");
    return friendList.name;
}

//sorting in alphabatical order
function solution11c(){ 
     return friendList.name.sort();  
    }
    
//friendlist sorted by Length of Name
function solution11d(){ 
    var nameLength = []; 
    var newList  = [];
    for(var i=0;i<friendList.name.length;i++){
        nameLength[i] = friendList.name[i].length;
    }
    for(var i = 0;i < nameLength.length - 1 ;i++  ){
        friendList.name.sort(function(a, b){return a - b});
    }
    for(var i = 0;i < nameLength.length - 1 ;i++  ){
        for( var j = i+1; j > 0  ; j--){
            if(nameLength[j]<=nameLength[j-1])
            {
                
               var temp = nameLength[j];
               nameLength[j] = nameLength[j-1];
               nameLength[j-1] = temp;
                 
                var temp = friendList.name[j];
                friendList.name[j] = friendList.name[j-1];
                friendList.name[j-1] = temp;
            }
        }
        
    }
  return friendList.name;
}

//initials of all your friends
function solution11e(){
        var nameAcronym = []; 
        for(var i=0;i<friendList.name.length;i++){
             nameAcronym[i] = solution9(friendList.name[i]);
            }
            return nameAcronym;     
}

//Same name Friends
function solution11f(){
    var firstName = [];
    var a = [];
    var sameName = [];
    for(var i=0;i<friendList.name.length;i++){
        var first = friendList.name[i].split(" ");
        firstName[i] = first[0].toLocaleLowerCase();
    }
    var k = 0;
    for(var i=0 ; i < friendList.name.length - 1 ; i++){
        var flag = true;
        for(var j = i+1 ; j < friendList.name.length ; j++ ){
            if(firstName[i] === firstName[j]    ){
                sameName[k++] = friendList.name[j];
                if(flag){
                     sameName[k++] = friendList.name[i];
                     flag = false;
                }
                friendList.name.splice(j,1);
            }  
        }
    }
    return sameName;
 }    
    
   
