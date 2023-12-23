import { Component } from "react";
import { countTotalFeedback } from "./countTotalFeedback";
import { countPositiveFeedbackPercentage } from "./countPositiveFeedbackPercentage";
import { Statistics } from "./statistics";
import { FeedbackOptions } from "./feedbackOptions";
import { Section } from "./sections";
import { Notification } from "./notification";

export class Feedback extends Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    addFeedback = (e) => {
    
        this.setState(prevState => ({ [e.target.value]: prevState[e.target.value] + 1 }));
    
    }


    render() { 
        const total = countTotalFeedback(this.state);
        const positivePercentage = countPositiveFeedbackPercentage(total, this.state);
        return(
            <>
                <Section title={"Please leave feedback"}>
                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.addFeedback} />
                </Section>
                
                <Section title={"Statistics"}>
                    {total>0 ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={positivePercentage} /> : <Notification message={"There is no feedback"}/>}
                   
                </Section>

            </>
        )
    }

}