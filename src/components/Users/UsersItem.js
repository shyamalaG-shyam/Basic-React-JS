const UsersItem = (props) => {
  //onclick this will executes the deleteHandler method in App.js(parent compo)
  const deletehandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li style={{ listStyle: "none" }} onClick={deletehandler}>
      {props.children}
    </li>
  );
};
export default UsersItem;
