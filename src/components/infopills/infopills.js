import './infopills.css';

function InfoPills() {
  return (
    <div className="infoPills">
      <h2>Important information</h2>

      <div className="subInfoPills">
        <div className="infoPill">
          <h3 className="subtitleInfoPills">35% of the wasted food</h3>
          <p>
            Huge amounts of food is also lost simply because we throw it away.
            They are out by supermarkets, shops, and households. Much of it is
            still perfectly fit for eating.
          </p>
        </div>
        <div className="infoPill">
          <h3 className="subtitleInfoPills">Environmental problems</h3>
          <p>
            Food production requires energy, pesticides, land and so on.
            Besides, food production contributes to the emission of greenhouse
            gasses.
          </p>
        </div>
        <div className="infoPill">
          <h3 className="subtitleInfoPills">Food waste and climate change</h3>
          <p>
            The carbon footprint of food waste is estimated to be 3.3 billion
            tons of CO2 equivalents released into the atmosphere a year.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoPills;
