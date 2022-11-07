import React from 'react';
import './About.scss';

// import basket_icon from '../../assets/basket_icon.svg';

const About: React.FC = () => {
  document.title = 'О компании';
  return (
    <div className="container">
      <div className="about-container">
        <h1>О КОМПАНИИ</h1>
        <div></div>
        <div>
          <p>Доброго времени! Рады видеть вас на нашем сайте!</p>
          <p>Наш магазин работает с 2012 года.</p>
          <p>
            Мы как и многие, были увлечены различными видами творчества, любили пробовать
            и создавать, что-то новое, но вот выбора материалов тогда в нашем городе не было.
            И тогда мы не остановились, и наши увлечения к творчеству и рукоделию переросли
            в любимое дело и мы открыли небольшой магазинчик.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
