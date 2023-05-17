
function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>GOAL!</h1>;
}

function Goal(props) {
    //alert(props.value);
    const isGoal = props.isGoal;
    //alert(isGoal);return false;
    /* if (isGoal) {
        return <MadeGoal/>;
    }
        return <MissedGoal/>;*/

    <>
        { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  }

  export default Goal;