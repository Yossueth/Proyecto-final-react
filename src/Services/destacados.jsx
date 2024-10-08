// GET
export async function getDestacados() {
    try {
      const response = await fetch("http://localhost:3000/destacados");
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.error("Error in GET request:", error.message);
      throw error;
    }
  }
  
  // POST
  export async function postDestacados(data) {
    try {
      const response = await fetch("http://localhost:3000/destacados", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error in POST request:", error.message);
      throw error;
    }
  }
  
  // PUT
  export async function putdestacados(data, id) {
    try {
      const response = await fetch(`http://localhost:3000/destacados/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error in PUT request:", error.message);
      throw error;
    }
  }
  
  // DELETE
  export async function deleteDestacados(id) {
    try {
      const response = await fetch(`http://localhost:3000/destacados/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log(`Task ${id} deleted`);
        return true;
      } else {
        console.error("Error deleting task:", response.statusText);
        return false;
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }
  