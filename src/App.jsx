import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";

class App extends Component {
  state = {
    preview: "",
    view: "0"
  };

  clearState = () => {
    console.log("AC");
    this.setState({
      preview: "",
      view: "0"
    });
  };

  pressNumber = event => {
    const number = event.target.value;
    console.log(number);
    const preview =
      this.state.preview.includes("=") && !/=$/.exec(this.state.preview)
        ? number
        : this.state.preview.concat(number);

    const view =
      /^[\d.]{1,}$/.exec(this.state.view) && !/^0$/.exec(this.state.view)
        ? this.state.view.concat(number)
        : number;

    this.setState({
      preview: preview,
      view: view
    });
  };

  pressDot = () => {
    const preview =
      this.state.preview === ""
        ? this.state.preview.concat("0.")
        : this.state.preview.concat(".");
    this.setState({
      preview: preview,
      view: preview
    });
  };

  pressOper = event => {
    const operation =
      this.state.preview === ""
        ? "0" + event.target.value
        : /[+-\/*]$/.exec(this.state.preview)
        ? ""
        : event.target.value;

    console.log(operation);
    const preview = this.state.preview.concat(operation);
    this.setState({
      preview: preview,
      view: operation
    });
  };

  pressEqual = () => {
    const result =
      this.state.preview === ""
        ? this.state.view.concat("")
        : this.state.preview.includes("=")
        ? "0"
        : /[+-\/*]$/.exec(this.state.preview)
        ? this.state.preview
        : new Function("return " + this.state.preview)();

    const preview =
      this.state.preview === ""
        ? this.state.preview.concat("")
        : this.state.preview.includes("=")
        ? ""
        : /[+-\/*]$/.exec(this.state.preview)
        ? this.state.preview
        : this.state.preview.concat("=" + result);

    this.setState({
      preview: preview,
      view: result
    });
  };

  render() {
    return (
      <div className="page">
        <div className="page__calculator">
          <div className="calculator__display" id="display">
            <div className="display__output">{this.state.preview}</div>
            <div className="display__input">{this.state.view}</div>
          </div>
          <div class="calculator__buttons">
            <Button
              className="buttons__reset button"
              value="AC"
              name="AC"
              type="reset"
              id="clear"
              clickButton={this.clearState}
            />

            <Button
              className="buttons__num button"
              value="7"
              name="seven"
              type="submit"
              id="seven"
              clickButton={this.pressNumber}
            />
            <Button
              className="buttons__num button"
              value="8"
              name="eight"
              type="submit"
              id="eight"
              clickButton={this.pressNumber}
            />

            <Button
              className="buttons__num button"
              value="9"
              name="nine"
              type="submit"
              id="nine"
              clickButton={this.pressNumber}
            />

            <Button
              className="buttons__num button"
              value="4"
              name="four"
              type="submit"
              id="four"
              clickButton={this.pressNumber}
            />
            <Button
              className="buttons__num button"
              value="5"
              name="five"
              type="submit"
              id="five"
              clickButton={this.pressNumber}
            />

            <Button
              className="buttons__num button"
              value="6"
              name="six"
              type="submit"
              id="six"
              clickButton={this.pressNumber}
            />

            <Button
              className="buttons__num button"
              value="1"
              name="one"
              type="submit"
              id="one"
              clickButton={this.pressNumber}
            />

            <Button
              className="buttons__num button"
              value="2"
              name="two"
              type="submit"
              id="two"
              clickButton={this.pressNumber}
            />

            <Button
              className="buttons__num button"
              value="3"
              name="three"
              type="submit"
              id="three"
              clickButton={this.pressNumber}
            />

            <Button
              className="buttons__num button"
              value="0"
              name="zero"
              type="submit"
              id="zero"
              clickButton={this.pressNumber}
            />

            <Button
              className="buttons__num button"
              value="."
              name="decimal"
              type="submit"
              id="decimal"
              clickButton={this.pressDot}
            />

            <Button
              className="buttons__operators button"
              value="/"
              name="divide"
              type="submit"
              id="divide"
              clickButton={this.pressOper}
            />

            <Button
              className="buttons__operators button"
              value="*"
              name="multiply"
              type="submit"
              id="multiply"
              clickButton={this.pressOper}
            />

            <Button
              className="buttons__operators button"
              value="-"
              name="subtract"
              type="submit"
              id="subtract"
              clickButton={this.pressOper}
            />

            <Button
              className="buttons__operators button"
              value="+"
              name="add"
              type="submit"
              id="add"
              clickButton={this.pressOper}
            />

            <Button
              className="buttons__result button"
              value="="
              name="equals"
              type="submit"
              id="equals"
              clickButton={this.pressEqual}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
