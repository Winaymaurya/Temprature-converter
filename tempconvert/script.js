

const tempcalc=()=>{

    const num=document.getElementById('temp').value;
    console.log(num);

    const tempsel=document.getElementById('temp-diff');

    const optionval= tempsel.selectedIndex;
    console.log(optionval);

    const celtofar=(c)=>{
        let far= Math.round((c*9/5)+32);
        return far
    }
    const fartocel=(f)=>{
        let cel= Math.round((f-32)*5/9);
        return cel
    }
    
    let res;
    if(optionval==0){
        res=celtofar(num);
        document.getElementById('result').innerHTML=`= ${res} Fahrenhiet`
    }
    else{
        res= fartocel(num);
        document.getElementById('result').innerHTML=`= ${res} °Celsius`
    
    }
}


