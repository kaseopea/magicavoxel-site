import * as React from "react"

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
            <div className="col">
                <p>Copyright &copy; ephtracy 2011-2021</p>  
            </div>
            <div className="col text-end">
                <p className="text-end">
                    <a href="#top" className="btn btn-link" title="Navigate to the top of the page">
                        <i class="bi bi-arrow-up"></i>Back on top
                    </a>
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
