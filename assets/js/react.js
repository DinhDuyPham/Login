import React from "react";
import { image } from "react-native";

class ImageContainer extends React.Component {
    render() {
        return <View>{/* Placeholder for images to be placed here */}</View>;
    }
}

let imageUrls = [
    "assets/img/background-1.jpg",
    "assets/img/background-2.jpg",
    "assets/img/background-3.jpg",
    "assets/img/background-4.jpg",
    "assets/img/background-5.jpg",
    "assets/img/background-6.jpg",
    "assets/img/background-7.jpg",
    "assets/img/background-8.jpg",
    "assets/img/background-9.jpg",
    "assets/img/background-10.jpg"];    

render(){
    return (
        <View>
            {imageUrls.map((imageUrl) => (
                <Image style={styles.image} source={{ uri: imageUrl }} />
            ))}
        </View>
    )
}
