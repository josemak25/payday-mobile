import React from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";

function AppBouncyCheck(props) {
    return (
        <BouncyCheckbox
            isChecked = {false}
            text="Remember login"
            onPress={(checked) => console.log("Checked: ", checked)}
        />
    );
}

export default AppBouncyCheck;