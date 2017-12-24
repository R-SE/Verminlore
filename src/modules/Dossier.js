import React from 'react';

class Dossier extends React.Component {
  render() {
    return (
      <article className="dossier">
        <h1>Victor Saltzpyre</h1>
        <img src="assets/images/Witch_Hunter.png"/>
        <p>Victor Saltzpyre is a witch hunter and fervent member of the Holy Order of the Templars of Sigmar. Haunted by an incident in dark mine involving a young girl and a horde of Skaven, Saltzpyre seeks to uncover the deep corruption plaguing the empire. He arrived in Ubersreik with a prisoner in tow, the witch Sienna Fuegonasus, but quickly realized he would need her help to drive back the invading Skaven that had descended upon the sleeping town. And so began an unlikely, tenuous alliance as Saltzpyre sought to retake Ubersreik by purging every last vermin.</p>
        <p className="stylizedText">Some claim Saltzpyre is obsessed and in over his head. Others say he is a driven man. But none can deny that between Saltzpyre's sharp perception and sharper rapier, no Skaven will escape alive. </p>
      </article>
    );
  }
}

export default Dossier;
