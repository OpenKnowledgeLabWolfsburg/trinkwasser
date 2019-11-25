import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddUpdateFormStyles from "./AddUpdateFormStyles";
import { compose } from "recompose";
import TextField from "@material-ui/core/TextField";
import { Select, MenuItem } from "@material-ui/core";

class AddUpdateForm extends Component {

    render() {

        const { t, classes, attributes, handleSubmit } = this.props;

        return (
            <form
                className={classes.container}
                autoComplete="off"
                onSubmit={handleSubmit}>

                {attributes.map(attribute =>
                    <React.Fragment key={attribute.name}>
                        {this.renderAttribute(attribute)}
                        <br/>
                    </React.Fragment>
                )}
                <br />
                <Button type="submit" variant="contained" color="primary">
                    {t('button.submit')}
                </Button>
            </form>
        )
    }

    renderAttribute = (attribute) => {

        const { t, classes, entity, prefix, handleChange } = this.props;

        let result = null;

        if (attribute.type === "select") {
            result = (<Select
                id={"input-" + attribute.name}
                name={attribute.name}
                className={classes.marginInput}
                label= {t(prefix + '.' + attribute.name)}
                value={entity[attribute.name] !== null ? entity[attribute.name] : ""}
                onChange={handleChange}
              >
                {attribute.items.map(item => <MenuItem key={"" + item.id + "-" + item.name} value={item}>{item.name}</MenuItem>)}
              </Select>)
        } else {
            result = <TextField
                        inputProps={attribute.inputProps}
                        key={attribute.name}
                        id={"input-" + attribute.name}
                        label={t(prefix + '.' + attribute.name)}
                        name={attribute.name}
                        type={attribute.type}
                        value={entity[attribute.name] !== null ? entity[attribute.name] : ""}
                        className={classes.marginInput}
                        onChange={handleChange}
                        margin="normal"
                    />;
        }
        return result;
    }

    getAttributeByString = (object, attribute, defaultValue) => {
        let result = object;
        attribute.split(".").forEach(element => {
            if (result[element] !== undefined) {
                result = result[element];
            } else {
                return defaultValue;
            }
        });
        return result;
    }

}

export default compose(withStyles(AddUpdateFormStyles), withTranslation())(AddUpdateForm);