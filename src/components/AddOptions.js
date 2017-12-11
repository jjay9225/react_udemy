import React from 'react';

//Can inline export default for classes
export default class AddOptions extends React.Component {

        state = {
            error: undefined,
        };

        handleAddOption = (e) => {
            e.preventDefault();
            const option = e.target.elements.option.value;
            const error = this.props.handleAddOption(option);
            this.setState(() => ({
                error,
            }));
            e.target.elements.option.value = '';
        }

        render() {
            return ( <
                div > {
                    this.state.error && < p className="add-option-error"> {
                        this.state.error
                    } < /p>} <
                    form className="add-option" onSubmit = {
                        this.handleAddOption
                    } >
                    <
                    input className="add-option__input" type = 'text'
                    name = 'option' / >
                    <
                    button className="button"> Add Option < /button> <
                    /form> <
                    /div>
                );
            }
        }