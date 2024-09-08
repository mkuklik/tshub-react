/* eslint-disable import/prefer-default-export */
import { Position, Toaster } from '@blueprintjs/core';
import './AppToaster.css';

/** Singleton toaster instance. Create separate instances for different options. */
export const AppToaster = Toaster.create({
  className: ['recipe-toaster', 'recipetoaster'],
  position: Position.RIGHT_TOP,
  usePortal: true,
}); // , document.getElementById('main_container'));
