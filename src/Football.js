function Football() {
    const shoot = (a) => {
     // alert(b.type);
      alert(a);
    }
  
    return (
      <button onClick={()=>shoot("Goal!")}>Take the shot!</button>
    );
  }

  export default Football;