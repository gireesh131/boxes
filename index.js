const Box = (props) => {
  //  Write your code here.
  const { text, styles } = props;
  return <p className={styles}>{text}</p>;
};

const element = (
  //  Write your code here.
  <div class="bg-container">
    <h1 class="main-heading">Boxes</h1>
    <div class="card-container">
      <Box text="Small" styles="small-box" />
      <Box text="Medium" styles="medium-box" />
      <Box text="Large" styles="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
