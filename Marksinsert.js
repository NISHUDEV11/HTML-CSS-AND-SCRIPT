let arr=[]
function addon(){
    let addName=document.querySelector('.name');
    let st_name=addName.value;
    let addCasa=document.querySelector('.casa');
    let cs_marks=addCasa.value;
    let addMcp=document.querySelector('.mcp');
    let mc_marks=addMcp.value
    arr.push({student:st_name,studentcasa_marks:cs_marks,studentmcp_marks:mc_marks})
    console.log(arr)
    addName.value=" "
    addCasa.value=" "
    addMcp.value=" "
}
function printon(){
    let displayElement=document.querySelector('.list');
    displayElement.innerText=' ';
    let newhtml=``
    
    for(let i=0;i<arr.length;i++){
        let {student,studentcasa_marks,studentmcp_marks}=arr[i]
       
        newhtml+=`

        <div>${student}</div><div>${studentcasa_marks}</div><div>${studentmcp_marks}</div>
        <button class="del" onclick="arr.splice(${i},1);printon()">DELETE</button>`
        
        
    }
        
        
    document.querySelector('.list').innerHTML=newhtml;
}
