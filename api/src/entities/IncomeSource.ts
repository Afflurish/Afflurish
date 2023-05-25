import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne
} from 'typeorm';
import User from './User.js';

@Entity('income_sources')
class IncomeSource extends BaseEntity {

    constructor(
        id: number,
        user: User,
        amount: number,
        label: string,
        updated_at: Date,
        created_at: Date,
    ) {
        super();
        this.id = id;
        this.user = user;
        this.amount = amount;
        this.label = label;
        this.updated_at = updated_at;
        this.created_at = created_at;
    };

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(
        () => User,
        (user: User) => user.income_sources,
        { onDelete: "CASCADE" }
    )
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column({ type: "int" })
    amount: number;

    @Column({ type: "varchar", length: 255 })
    label: string;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;
};

export default IncomeSource;