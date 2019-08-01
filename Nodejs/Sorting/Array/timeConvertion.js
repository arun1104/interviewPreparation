function newTime(time) {
    let lastSubstring = time.substring(time.length - 2, time.length);
    let firstSubstring = time.substring(0, 2);
    let number = parseInt(firstSubstring);
    if (lastSubstring == "AM") 
    {
        time=time.replace("AM",'');
        if(number==12)
        time=time.replace("12",'00');
        return time;
    }

    else {
        time=time.replace("PM",'');
        let hourValue = number;
        if (hourValue === 12) return time;
        else hourValue += 12;
        return time.replace(firstSubstring, hourValue.toString());
    }
  
}
