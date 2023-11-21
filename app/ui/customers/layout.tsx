export default function CustomersLayout( 
    {children} : {children : React.ReactElement}
){
    return(
        <section>
            Esto es el layout de los customers
            {children}
        </section>
    )
}