import { useSelector, useDispatch } from "react-redux";
import Grid from "./Grid";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { resetCell } from "../../redux/features/game/gameSlice";
import { nivels } from "../../constans/nivels";

const Game = () => {
  const { cells, level } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetCell(nivels.normal));
  }, []);
  return <Grid cells={cells} level={level} />;
};

export default Game;
