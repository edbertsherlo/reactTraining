import React, { useEffect, useState } from "react";

const FormComp = () => {
  const [firstName, setFirstName] = useState("");
  const [textdata, setTextdata] = useState("");
  const [vehicle, setVehicle] = useState();
  const [bike, setBike] = useState(false);
  //   const [formData, setFormData] = useState({});

  useEffect(() => {
    console.log("firstName", firstName);
    console.log("bike value", bike);
  }, [firstName, bike]);
  return (
    <>
      <div>
        <h1>Forms</h1>
      </div>
      <div>
        <label for="vehicle1"> FirstName</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label for="vehicle1"> Paragraph</label>

        <input
          type="textarea"
          value={textdata}
          onChange={(e) => setTextdata(e.target.value)}
        />
        <input type="radio" name="vehicle" value={"text"} />
        <label for="vehicle1"> bike</label>
        <input type="radio" name="vehicle" />
        <label for="vehicle1"> Cycle</label>
        <input type="radio" name="vehicle" checked={true} />
        <label for="vehicle1"> Car</label>
        <br></br>

        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          checked={bike}
          onClick={(e) => setBike(!bike)}
        />
        <label for="vehicle1"> I have a bike</label>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label for="vehicle2"> I have a car</label>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
        <label for="vehicle3"> I have a boat</label>
      </div>
    </>
  );
};

export default FormComp;
