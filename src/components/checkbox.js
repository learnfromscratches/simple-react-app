import styles from './checkbox.module.css'

const Checkbox = props =>{
    return(
        <div className={styles.checkbox} onClick={e=>{props.checkboxAction(e,props.label)}}>
            <input type="checkbox"/>
            <label>{props.label}</label>
        </div>
    )
}
export default Checkbox;