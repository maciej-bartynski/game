import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./component.example.style";

const ComponentExample = ({ label }) => {
    const [counter, setCounter] = useState(0);
 
    return (
        <TouchableOpacity
            testID="componentExample__button"
            style={styles.root}
            onPress={() => {
                setCounter(counter + 1)
                console.log("clicked")
            }}
        >
            <Text>
                {label} : {counter}
            </Text>
        </TouchableOpacity>
    )
}

export default ComponentExample