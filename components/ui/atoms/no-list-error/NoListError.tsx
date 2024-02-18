const NoListError = ({ message }: any) => {
  return (
    <div className="no-data">
      <p>{message}</p>
    </div>
  );
};

export default NoListError;
