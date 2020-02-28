import React, { useState } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import '../css/Home.css';

const defaults = {
    color: {
        background: "#FFFFFF",
        text: "#000000"
    }
};

const styles = {
    preview: {
        height: "300px",
        width: "450px",
        margin: "auto"
    }
}

const Home: React.FC<{}> = props => {
    const [bgColor, setBgColor] = useState(defaults.color.background);
    const [textColor, setTextColor] = useState(defaults.color.text);
    const [text, setText] = useState("");

    const onMakeHandler = () => {
        const preview = document.getElementById("preview-area");


        
    };

    const onChangeText = (e: any) => {
        const preview = document.getElementById("preview-text");

        setText(e.target.value);

        if (preview) {
            preview.innerText = e.target.value;
        }

    };

    const onChangeColor = (name: string) => {

        if (name === "background") {
        
            return (e: any):void => {
                const preview = document.getElementById("preview-area");

                if (!preview) {
                    return;
                }

                setBgColor(e.target.value);
                preview.style.backgroundColor = e.target.value;
            }
           
        } else if (name === "text") {

            return (e: any):void => {
                const preview = document.getElementById("preview-area");

                if (!preview) {
                    return;
                }

                setTextColor(e.target.value);
                preview.style.color = e.target.value;
            }

        }
    }

    return (
        <div>
            <div id="preview-area" style={styles.preview}>
                <p id="preview-text">text</p>
            </div>

            <div className="control color-picker">
                <label>Background Color</label>
                <div>
                    <input type="color" value={bgColor} onChange={onChangeColor("background")}></input>
                </div>
            </div>

            <div className="control color-picker">
                <label>Text Color:</label>
                <div>
                    <input type="color" value={textColor} onChange={onChangeColor("text")}></input>
                </div>
            </div>

            <div className="control input-text">
                <textarea placeholder="enter your text here" value={text} onChange={onChangeText}></textarea>
            </div>

            <div className="control button-wrapper" onClick={onMakeHandler}>
                <Button type="primary">Make</Button>
            </div>
        </div>
    );
}

export default Home;
