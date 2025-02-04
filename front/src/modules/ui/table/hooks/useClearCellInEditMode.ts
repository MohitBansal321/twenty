import { useRecoilCallback } from 'recoil';

import { currentCellInEditModePositionState } from '../states/currentCellInEditModePositionState';
import { isCellInEditModeFamilyState } from '../states/isCellInEditModeFamilyState';

export const useCloseCurrentCellInEditMode = () =>
  useRecoilCallback(({ set, snapshot }) => {
    return async () => {
      const currentCellInEditModePosition = await snapshot.getPromise(
        currentCellInEditModePositionState,
      );

      set(isCellInEditModeFamilyState(currentCellInEditModePosition), false);
    };
  }, []);
