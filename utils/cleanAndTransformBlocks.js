import { v4 as uuidv4 } from 'uuid';

export const cleanAndTransformBlocks = (blocksJSON) => {
    const blocks = JSON.parse(JSON.stringify(blocksJSON));

    const assignIds = (b) => {
        b.forEach((block) => {
            block.id = uuidv4();
            if (block.innerBlocks?.length) {
                assignIds(block.innerBlocks);
            }
        });
    }

    assignIds(blocks);

    return blocks;
};