import React, {Component} from 'react';

class Render extends Component {
  render() {
    const MissedGoal = false; // Replace with your actual condition

    if (MissedGoal) {
      return <p>My name is Mala</p>;
    } else {
      return <p>My name is Kashmala</p>;
    }
  }
}
// class Render extends Component {
//     MissedGoal= false;
//     message = this.MissedGoal ? 'Mala' : 'Kashmala';
  
//     render() {
//       return (
//         <div>
//           <p>{this.message}</p>
//         </div>
//       );
//     }
//   }
// class Render extends Component {
//     render() {
//       const MissedGoal = true;
  
//       return (
//         <div>
//           {MissedGoal ? (
//             <p>My name is Mala</p>
//           ) : (
//             <p>My name is Kashmala</p>
//           )}
//         </div>
//       );
//     }
//   }
// class Render extends Component {
//     render() {
//       const MissedGoal = false;
  
//       return (
//         <div>
//           {MissedGoal && <p>My name is Kashmala</p>}
//         </div>
//       );
//     }
//   }



export default Render;
