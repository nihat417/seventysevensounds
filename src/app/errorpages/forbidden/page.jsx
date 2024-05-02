
import React from 'react';
import '../../../lib/scss/errorstyles.scss';

const ForbiddenPage = () => {
  return (
    <div id="app">
      <div>403</div>
      <div className="txt">
        Forbidden
        <span className="blink">_</span>
      </div>
    </div>
  );
};

export default ForbiddenPage;
