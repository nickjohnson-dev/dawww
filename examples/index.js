import { h } from 'picodom';
import Dawww from '../src';
import render from './render';
import sampleSong from './loadTestingSong.json';
import sampleSongAlt from './sampleSongAlt';

const dawww = Dawww({
  song: sampleSong,
});

const view = props =>
  h('div', {}, [
    h('div', {}, [props.playbackState]),
    h(
      'div',
      {
        style: {
          backgroundColor: '#ddd',
          height: '20px',
          position: 'relative',
          width: `${sampleSong.measureCount * 64}px`,
        },
      },
      [
        h(
          'div',
          {
            style: {
              left: `${2 * props.position}px`,
              position: 'absolute',
              top: 0,
              width: '100px',
            },
          },
          [`| ${props.position}`],
        ),
      ],
    ),
    h('div', {}, [
      h(
        'button',
        {
          onmousedown: () => {
            if (props.playbackState === 'STARTED') {
              dawww.pause();
            } else {
              dawww.start();
            }
          },
        },
        [props.playbackState === 'STARTED' ? 'pause' : 'start'],
      ),
      h(
        'button',
        {
          onmousedown: () => {
            dawww.stop();
          },
        },
        ['stop'],
      ),
      h(
        'button',
        {
          onmousedown: () => {
            dawww.updateSong(sampleSong);
          },
        },
        ['load song'],
      ),
      h(
        'button',
        {
          onmousedown: () => {
            dawww.updateSong(sampleSongAlt);
          },
        },
        ['update song'],
      ),
      h(
        'button',
        {
          onmousedown: () => {
            dawww.preview(0, 47);
          },
        },
        ['play C3'],
      ),
      h(
        'button',
        {
          onmousedown: () => {
            dawww.setPosition(8);
          },
        },
        ['set position 8'],
      ),
    ]),
  ]);

dawww.onPositionChange((position) => {
  render(view, { position });
});

dawww.onStateChange((playbackState) => {
  render(view, { playbackState });
});

render(view, {
  playbackState: 'STOPPED',
  position: 0,
});
