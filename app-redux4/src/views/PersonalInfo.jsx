import { connect } from "react-redux";

const PersonalInfo = connect(({ personalInfo }) => ({ personalInfo }))(
  (props) => {
    const { personalInfo, dispatch } = props;

    const onChangeNameClick = () => {
      dispatch({
        type: "Change_Name",
        payload: {
          name: `wjj${Math.floor(Math.random() * 10)}`,
        },
      });
    };

    return (
      <div>
        <h2>Personal Info</h2>
        <div>
          <h4>Name: {personalInfo.name}</h4>
          <h4>age: {personalInfo.age}</h4>
          <h4>sex: {personalInfo.sex}</h4>
          <h4>isSingle: {personalInfo.single ? "Yes" : "No"}</h4>
        </div>
        <button onClick={onChangeNameClick}>changeName</button>
      </div>
    );
  }
);

export default PersonalInfo;
