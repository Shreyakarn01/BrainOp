import React from 'react';
import styles from '../about.module.css'; // Import the CSS module

const About = () => {
  return (
    <div>
      <div className={styles['about-container']}>
        <h2 className={styles['about-heading']}>About BrainOp</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
            <button className={`accordion-button ${styles['accordion-button']}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Intro for this application</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className={`accordion-body ${styles['accordion-body']}`}>
                Welcome to <strong>BrainOp</strong>, your digital posthandler in the cloud! With BrainOp, you can easily jot down your thoughts, ideas, and to-do lists, and access them from anywhere. Our secure login and signup pages ensure that your posts are always <code>safe and private</code>.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className={`accordion-button collapsed ${styles['accordion-button']}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>CRUD operations</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className={`accordion-body ${styles['accordion-body']}`}>
                Once logged in, you can seamlessly perform <strong>CRUD operations</strong> on your posts. Need to <code>create a new post</code>? Just click <code>'Add Post'</code> and start typing. Want to <code>update an existing post</code>? Simply select it and make your changes using <code>'Update Post'</code>. And if you ever need to <code>remove a post</code>, just hit <code>'Delete'</code> - it's that easy!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className={`accordion-button collapsed ${styles['accordion-button']}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Convenient & Seamless Experience</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className={`accordion-body ${styles['accordion-body']}`}>
                To keep you informed, BrainOp also includes <strong>alert message popups</strong>, ensuring that you get to know the changes made by you. Experience the <code>convenience</code> of digital post-taking with <strong>BrainOp</strong> - sign up today and start organizing your posts in the cloud!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;