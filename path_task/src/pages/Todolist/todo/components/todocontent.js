const TodoContent = ({ todo }) => {
  return (
    <>
      <div>
        {/* <div>check</div> */}
        <div>
          <div>{todo}</div>
          <div>
            <button>edit</button>
            <button>del</button>
          </div>
        </div>
        {/* <div>
            //  content ref 
        </div>
         */}
      </div>
    </>
  );
};
export default TodoContent;
