import React from "react";
import {Layout} from 'antd'
import 'antd/dist/antd.css';
import './MainPage.css'
import {YMaps, Map, Placemark} from "react-yandex-maps";

export  class MainPage extends React.PureComponent {
    render(): JSX.Element {
        return (
            <>
                <Layout.Header className={'main-header'}>
                    Постоматы
                </Layout.Header>
                <Layout.Content className={'main-content'}>
                    <div className={'main-description'}>
                        Основной текст Основной текст Основной текст Основной текст Основной текст Основной текст
                        Основной текст Основной текст Основной текст Основной текст Основной текст Основной текст
                        Основной текст Основной текст Основной текст Основной текст Основной текст Основной текст
                        Основной текст Основной текст Основной текст Основной текст Основной текст Основной текст
                        Основной текст Основной текст Основной текст Основной текст Основной текст Основной текст
                    </div>
                    <YMaps query={{
                        ns: 'use-load-option',
                        load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon'
                    }}>
                        <Map
                            defaultState={{
                                center: [55.75, 37.57],
                                zoom: 9,
                                controls: ['zoomControl', 'fullscreenControl']
                            }}
                            width={'100%'}
                            height={'500px'}
                        >
                            <Placemark defaultGeometry={[55.75, 37.57]} properties={{
                                balloonContentBody: 'This is balloon loaded by the Yandex.Maps API module system'
                            }} />
                        </Map>
                    </YMaps>
                </Layout.Content>
                <Layout.Footer className={'main-footer'}>
                    Авторы: Автор Автор Автор
                </Layout.Footer>
            </>
        );
    }
}
