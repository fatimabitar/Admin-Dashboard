import React from "react";
import "../css/widgetLg.css";
export const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <span className="widgetSm__title">Latest Transactions</span>
      <table className="widgetLg__table">
        <tr className="widgetLg__tr">
          <th className="widgetLg__th">Custumer</th>
          <th className="widgetLg__th">State</th>
          <th className="widgetLg__th">Amount</th>
          <th className="widgetLg__th">Status</th>
        </tr>
        <tr className="widgetLg__tr">
          <td className="widgetLg__user">
            <img
              src="https://www.w3schools.com/w3images/avatar6.png"
              alt=""
              className="widgetLg__img"
            />
            <span className="widgetLg__name">Susan Carol</span>
          </td>
          <td className="widgetLg__date">2 Jun 2021</td>
          <td className="widgetLg__amount">$122.00</td>
          <td className="widgetLg__status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLg__tr">
          <td className="widgetLg__user">
            <img
              src="https://www.w3schools.com/w3images/avatar6.png"
              alt=""
              className="widgetLg__img"
            />
            <span className="widgetLg__name">Susan Carol</span>
          </td>
          <td className="widgetLg__date">2 Jun 2021</td>
          <td className="widgetLg__amount">$122.00</td>
          <td className="widgetLg__status">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLg__tr">
          <td className="widgetLg__user">
            <img
              src="https://www.w3schools.com/w3images/avatar6.png"
              alt=""
              className="widgetLg__img"
            />
            <span className="widgetLg__name">Susan Carol</span>
          </td>
          <td className="widgetLg__date">2 Jun 2021</td>
          <td className="widgetLg__amount">$122.00</td>
          <td className="widgetLg__status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLg__tr">
          <td className="widgetLg__user">
            <img
              src="https://www.w3schools.com/w3images/avatar6.png"
              alt=""
              className="widgetLg__img"
            />
            <span className="widgetLg__name">Susan Carol</span>
          </td>
          <td className="widgetLg__date">2 Jun 2021</td>
          <td className="widgetLg__amount">$122.00</td>
          <td className="widgetLg__status">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};
