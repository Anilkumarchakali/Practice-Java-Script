{
    let a = 10;
    console.log('Accessing variable a inside the block:',a);
    a = 20;
    console.log('Accessing Reassigned variable a inside the block:',a);// Reassigned allowed
}
{
    const a = 10;
    console.log('Accessing variable inside same block:',a);
   // a = 20; not reassigned
   //console.log('Accessing Reassigned variable inside same block:',a);
}
