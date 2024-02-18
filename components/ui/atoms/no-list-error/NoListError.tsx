import styles from "./NoListError.module.css";

const NoListError = ({ message }: any) => {
  return (
    <div className={styles.NoListError}>
      <p>{message}</p>
    </div>
  );
};

export default NoListError;
