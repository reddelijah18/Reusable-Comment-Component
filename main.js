class UserComment extends HTMLElement {
    constructor(){
      super();
      this.name = "";
      this.email = "";
    }
  
    connectedCallback() {
      this.innerHTML = `
      <form id="myForm">
         Name: <input required id="userName" type="text" name="fname">
         <br><br>
         Email Address: <input required id="userEmail" type="text" name="email">
         <br><br>
         <textarea required id ="userComment" rows="4" cols="50" name="comment" placeholder="Enter comment here..."></textarea>
         <br><br>
         <input type="button" onclick="myFunction()" value="Submit">
      </form>
      <h5>Submitted data :</h5>
      <p id="data"></p>
      <script>
         function myFunction(){
          let data = "";  let name = document.getElementById("userName").value
          let email = document.getElementById("userEmail").value
          let comment = document.getElementById("userComment").value
         
         data = "User name : "+name+"<br/>User email : "+email+ "<br/>User comment : "+comment
         
         document.getElementById("data").innerHTML = data  // display data to paragraph
         }
      </script>

      `;
    }


  }
  
  function myFunction() {
    let data = "";
    let name = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;
    let comment = document.getElementById("userComment").value;

    data =
      "User name : " +
      name +
      "<br/>User email : " +
      email +
      "<br/>User comment : " +
      comment;

    document.getElementById("data").innerHTML = data; // display data to paragraph
  }
  customElements.define('user-comment', UserComment);