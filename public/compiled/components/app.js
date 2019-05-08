class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: FormOne
    };
    this.idx = 0;
    this.forms = [FormTwo, FormThree];
    this.secondForm = this.secondForm.bind(this);
  }
  secondForm() {
    this.setState({
      currentForm: this.forms[this.idx]
    });
    this.idx = this.idx + 1;
    console.log(this.idx);
  }

  thirdForm() {
    this.setState({
      currentForm: FormThree
    });
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        React.createElement(this.state.currentForm, { changeForm: this.secondForm })
      ),
      React.createElement("div", null)
    );
  }
}

var FormOne = props => React.createElement(
  "div",
  null,
  React.createElement(
    "form",
    { action: "/forms", method: "POST", enctype: "text/plain" },
    React.createElement(
      "label",
      { "for": "fname" },
      React.createElement("i", { "class": "name" }),
      " Full Name"
    ),
    React.createElement("input", { type: "text", id: "fname", name: "name" }),
    React.createElement(
      "label",
      { "for": "email" },
      React.createElement("i", { "class": "email" }),
      " Email"
    ),
    React.createElement("input", { type: "text", id: "email", name: "email" }),
    React.createElement(
      "label",
      { "for": "adr" },
      React.createElement("i", { "class": "password" }),
      " Password"
    ),
    React.createElement("input", { type: "text", id: "adr", name: "password" }),
    React.createElement(
      "button",
      { type: "submit", onClick: props.changeForm },
      "Submit"
    )
  )
);
var FormTwo = props => React.createElement(
  "div",
  null,
  React.createElement(
    "form",
    { action: "/forms", method: "POST", enctype: "text/plain" },
    React.createElement(
      "label",
      { "for": "fname" },
      React.createElement("i", { "class": "address" }),
      " Address"
    ),
    React.createElement("input", { type: "text", id: "fname", name: "address" }),
    React.createElement(
      "label",
      { "for": "email" },
      React.createElement("i", { "class": "city" }),
      " City"
    ),
    React.createElement("input", { type: "text", id: "email", name: "city" }),
    React.createElement(
      "label",
      { "for": "adr" },
      React.createElement("i", { "class": "city" }),
      " State"
    ),
    React.createElement("input", { type: "text", id: "state", name: "state" }),
    React.createElement(
      "label",
      { "for": "city" },
      React.createElement("i", { "class": "zipcode" }),
      " Zipcode"
    ),
    React.createElement("input", { type: "text", id: "zip", name: "zipcode" }),
    React.createElement(
      "button",
      { type: "submit", onClick: props.changeForm },
      "Submit"
    )
  )
);

var FormThree = props => React.createElement(
  "div",
  null,
  React.createElement(
    "form",
    { action: "/forms", method: "POST", enctype: "text/plain" },
    React.createElement(
      "label",
      { "for": "fname" },
      React.createElement("i", { "class": "fa fa-user" }),
      " Credit Card"
    ),
    React.createElement("input", { type: "text", id: "fname", name: "Credit Card" }),
    React.createElement(
      "label",
      { "for": "email" },
      React.createElement("i", { "class": "fa fa-envelope" }),
      " Expiration Data"
    ),
    React.createElement("input", { type: "text", id: "email", name: "expiration" }),
    React.createElement(
      "label",
      { "for": "adr" },
      React.createElement("i", { "class": "fa fa-address-card-o" }),
      " CSV"
    ),
    React.createElement("input", { type: "text", id: "adr", name: "csv" }),
    React.createElement(
      "label",
      { "for": "city" },
      React.createElement("i", { "class": "fa fa-institution" }),
      " Billing Zipcode"
    ),
    React.createElement("input", { type: "text", id: "city", name: "billingzip" }),
    React.createElement(
      "button",
      { type: "submit" },
      "Submit"
    )
  )
);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRGb3JtIiwiRm9ybU9uZSIsImlkeCIsImZvcm1zIiwiRm9ybVR3byIsIkZvcm1UaHJlZSIsInNlY29uZEZvcm0iLCJiaW5kIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwidGhpcmRGb3JtIiwicmVuZGVyIiwiY2hhbmdlRm9ybSIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDaENDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBYUM7QUFERixLQUFiO0FBR0EsU0FBS0MsR0FBTCxHQUFXLENBQVg7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBQ0MsT0FBRCxFQUFVQyxTQUFWLENBQWI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEtBQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQWxCO0FBQ0Q7QUFDREQsZUFBYztBQUNaLFNBQUtFLFFBQUwsQ0FBYztBQUNaUixtQkFBYSxLQUFLRyxLQUFMLENBQVcsS0FBS0QsR0FBaEI7QUFERCxLQUFkO0FBR0EsU0FBS0EsR0FBTCxHQUFXLEtBQUtBLEdBQUwsR0FBVyxDQUF0QjtBQUNBTyxZQUFRQyxHQUFSLENBQVksS0FBS1IsR0FBakI7QUFDRDs7QUFFRFMsY0FBYTtBQUNYLFNBQUtILFFBQUwsQ0FBYztBQUNaUixtQkFBYUs7QUFERCxLQUFkO0FBR0Q7QUFDRE8sV0FBVTtBQUNSLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsaUNBQU0sS0FBTixDQUFZLFdBQVosSUFBd0IsWUFBWSxLQUFLTixVQUF6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QW1CLElBQUcsS0FBdEIsRUFBNEIsTUFBSyxLQUFqQyxHQU5GO0FBT0U7QUFBQTtBQUFBLFFBQU8sT0FBSSxNQUFYO0FBQWtCLGlDQUFHLFNBQU0sbUJBQVQsR0FBbEI7QUFBQTtBQUFBLEtBUEY7QUFRRSxtQ0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxNQUF0QixFQUE2QixNQUFLLFlBQWxDLEdBUkY7QUFTRTtBQUFBO0FBQUEsUUFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBVEY7QUFESixDQURGOztBQWdCQWdCLFNBQVNGLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUEwQkcsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUExQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudEZvcm06IEZvcm1PbmVcbiAgICB9XG4gICAgdGhpcy5pZHggPSAwO1xuICAgIHRoaXMuZm9ybXMgPSBbRm9ybVR3bywgRm9ybVRocmVlXTtcbiAgICB0aGlzLnNlY29uZEZvcm0gPSB0aGlzLnNlY29uZEZvcm0uYmluZCh0aGlzKTtcbiAgfVxuICBzZWNvbmRGb3JtICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRGb3JtOiB0aGlzLmZvcm1zW3RoaXMuaWR4XVxuICAgIH0pXG4gICAgdGhpcy5pZHggPSB0aGlzLmlkeCArIDE7XG4gICAgY29uc29sZS5sb2codGhpcy5pZHgpO1xuICB9XG5cbiAgdGhpcmRGb3JtICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRGb3JtOiBGb3JtVGhyZWVcbiAgICB9KVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHRoaXMuc3RhdGUuY3VycmVudEZvcm0gY2hhbmdlRm9ybT17dGhpcy5zZWNvbmRGb3JtfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG52YXIgRm9ybU9uZSA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgICAgPGZvcm0gYWN0aW9uPVwiL2Zvcm1zXCIgbWV0aG9kPVwiUE9TVFwiIGVuY3R5cGU9XCJ0ZXh0L3BsYWluXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJmbmFtZVwiPjxpIGNsYXNzPVwibmFtZVwiPjwvaT4gRnVsbCBOYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmbmFtZVwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+PGkgY2xhc3M9XCJlbWFpbFwiPjwvaT4gRW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgIC8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJhZHJcIj48aSBjbGFzcz1cInBhc3N3b3JkXCI+PC9pPiBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRyXCIgbmFtZT1cInBhc3N3b3JkXCIgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3Byb3BzLmNoYW5nZUZvcm19PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuKVxudmFyIEZvcm1Ud28gPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICAgIDxmb3JtIGFjdGlvbj1cIi9mb3Jtc1wiIG1ldGhvZD1cIlBPU1RcIiBlbmN0eXBlPVwidGV4dC9wbGFpblwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZm5hbWVcIj48aSBjbGFzcz1cImFkZHJlc3NcIj48L2k+IEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZuYW1lXCIgbmFtZT1cImFkZHJlc3NcIiAvPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj48aSBjbGFzcz1cImNpdHlcIj48L2k+IENpdHk8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVtYWlsXCIgbmFtZT1cImNpdHlcIiAgLz5cbiAgICAgICAgPGxhYmVsIGZvcj1cImFkclwiPjxpIGNsYXNzPVwiY2l0eVwiPjwvaT4gU3RhdGU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInN0YXRlXCIgbmFtZT1cInN0YXRlXCIgIC8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+PGkgY2xhc3M9XCJ6aXBjb2RlXCI+PC9pPiBaaXBjb2RlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ6aXBcIiBuYW1lPVwiemlwY29kZVwiIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3Byb3BzLmNoYW5nZUZvcm19PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuKVxuXG52YXIgRm9ybVRocmVlID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgICA8Zm9ybSBhY3Rpb249XCIvZm9ybXNcIiBtZXRob2Q9XCJQT1NUXCIgZW5jdHlwZT1cInRleHQvcGxhaW5cIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImZuYW1lXCI+PGkgY2xhc3M9XCJmYSBmYS11c2VyXCI+PC9pPiBDcmVkaXQgQ2FyZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZm5hbWVcIiBuYW1lPVwiQ3JlZGl0IENhcmRcIiAvPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj48aSBjbGFzcz1cImZhIGZhLWVudmVsb3BlXCI+PC9pPiBFeHBpcmF0aW9uIERhdGE8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVtYWlsXCIgbmFtZT1cImV4cGlyYXRpb25cIiAgLz5cbiAgICAgICAgPGxhYmVsIGZvcj1cImFkclwiPjxpIGNsYXNzPVwiZmEgZmEtYWRkcmVzcy1jYXJkLW9cIj48L2k+IENTVjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRyXCIgbmFtZT1cImNzdlwiICAvPlxuICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPjxpIGNsYXNzPVwiZmEgZmEtaW5zdGl0dXRpb25cIj48L2k+IEJpbGxpbmcgWmlwY29kZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY2l0eVwiIG5hbWU9XCJiaWxsaW5nemlwXCIgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4pXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+ICwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=