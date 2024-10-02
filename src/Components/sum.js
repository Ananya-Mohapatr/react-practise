export  default Selection = ()=>{
    const options = [
        { name: "England", id: 1 },
        { name: "USA", id: 2 },
        { name: "Ukraine", id: 3 },
        { name: "Italy", id: 4 },
        { name: "Spain", id: 5 },
      ];
    return (
        <select>
          <option>Select a value</option>
          {options.map(({ name, id }) => {
            return <option key={id} id={id}>{name}</option>;
          })}
        </select>
      );
   

};