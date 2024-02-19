import styles from "./NoListError.module.css";

interface NoListError {
  message: string;
}

const NoListError = ({ message }: NoListError) => {
  return (
    <div className={styles.NoListError}>
      <p>{message}</p>
    </div>
  );
};

export default NoListError;
