
  const formData = { email: "", message: "" };

  window.addEventListener("load", () => {
    const savedData = localStorage.getItem("feedback-form-state");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      formData.email = parsedData.email || "";
      formData.message = parsedData.message || "";
      
      document.querySelector('input[name="email"]').value = formData.email;
      document.querySelector('textarea[name="message"]').value = formData.message;
    }
  });

  
  document.querySelector(".feedback-form").addEventListener("input", (event) => {
    if (event.target.name === "email") {
      formData.email = event.target.value;
    } else if (event.target.name === "message") {
      formData.message = event.target.value;
    }
    
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  });

  
  document.querySelector(".feedback-form").addEventListener("submit", (event) => {
    event.preventDefault();

   
    if (!formData.email || !formData.message) {
      alert("Fill please all fields");
    } else {
      console.log(formData); 
      localStorage.removeItem("feedback-form-state"); 
      formData.email = ""; 
      formData.message = "";
     
      document.querySelector('input[name="email"]').value = "";
      document.querySelector('textarea[name="message"]').value = "";
    }
  });
