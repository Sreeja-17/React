const heading = React.createElement("h1", { id: "parent" }, [

    React.createElement("div", { id: "child" }, " I am h1"), 
    
    
    React.createElement("div", { id: "child" }, " I am h2")]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);