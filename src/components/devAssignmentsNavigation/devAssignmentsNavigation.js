import styles from './devAssignmentsNavigation.module.css';
import DevAssignmentsNavBtn from './devAssignmentsNavBtn/devAssignmentsNavBtn.module';

const DevAssignmentsNavigation = () => {

  return (
    <div className={styles.navigation}>
      <div className={styles.header}>
         <h3>Assigments</h3>
      </div>
      <div className={styles.links}>
        <DevAssignmentsNavBtn></DevAssignmentsNavBtn>
      </div>
    </div>
  );
}

export default DevAssignmentsNavigation;