import React from "react";

function Timestamp () {
    getDuration = () => {
        if (!this.player) return null
        return this.player.getDuration()
      }
  
      getCurrentTime = () => {
        if (!this.player) return null
        return this.player.getCurrentTime()
      }
}

export default Timestamp;