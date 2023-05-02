import React from "react";

const Branch = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column mx-auto">
      <h2 className="text-center text-info">Our Branch</h2>

      {/* mumbai */}
      <div className="w-50 text-center ">
        <h4 className="text-success">Mumbai , Indea</h4>
        <p className="text-white fst-italic">
          The name Winta, in principle, quite fully describes the restaurant's
          concept: red meat and red wine - what else is needed for a steakhouse!
        </p>
      </div>
      {/* califunia */}
      <div className="w-50 text-center ">
        <h4 className="text-success">California, USA</h4>
        <p className="text-white  fst-italic">
          The name Winta, in principle, quite fully describes the restaurant's
          concept: red meat and red wine - what else is needed for a steakhouse!
        </p>
      </div>
      {/* itali */}
      <div className="w-50 text-center ">
        <h4 className="text-success">Roma, Italy</h4>
        <p className="text-white  fst-italic ">
          The name Winta, in principle, quite fully describes the restaurant's
          concept: red meat and red wine - what else is needed for a steakhouse!
        </p>
      </div>
    </div>
  );
};

export default Branch;
