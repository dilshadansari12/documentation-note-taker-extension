console.log(" i am running in user browsers");

//all targeted element
const data = document.getElementById("metaData");

//find platfrom user using
const userUrl = window.location.href || null;
let hostName = null;

const pTag = document.createElement("p");

if (userUrl !== null) {
  hostName = userUrl.split("//")[1] || null;
} else {
  hostName = "oops its look like somthing went wrond !!";
}

console.log(hostName);
pTag.innerHTML = hostName;
data.appendChild(pTag);

document.getElementById("btn").addEventListener("click", () => {
  console.log("button is clicked", userValue);
});

/*
    initial agenda

    find host name and if the any previous message is saved show or say to edit, 
    if not than show nothing to save,

    when user write something and try to save store in local storage and than show on screen 
    
    






    // store in local storage format
    platFormName : 
    [
      {

       tag
       isHeghlightedText,
       color,
       extracomment,     
       fontSize,
       fontColor,
       insertLink
      },
      {

       tag
       isHeghlightedText,
       color,
       extracomment,     
       fontSize,
       fontColor,
       insertLink
      }
      ......
    ]

*/
